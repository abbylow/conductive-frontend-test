// Libraries
import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import Papa from "papaparse";
import axios from "axios";

// Custom Components
import { Sankey, Link, Node } from "./components/Sankey";
import { CSV_PATH, ZERO, nodes, nodeMap } from "./const";

import "./App.css";

export default function App() {
  const [links, setLinks] = useState([]);
  const [hoveredLinkValue, setHoveredLinkValue] = useState('');
  const [hoveredNodeValue, setHoveredNodeValue] = useState('');

  useEffect(async () => {
    // load the data from CSV
    const response = await fetch(CSV_PATH);
    const csvString = await response.text();
    // parse the data from CSV to array
    const csvData = Papa.parse(csvString)?.data;
    // remove the first row data as there are headers
    csvData.shift();

    const linkMap = {};
    let mintTotal = 0;

    // process the data 
    csvData.forEach(([txhash, blockno, unixTimestamp, dateTime, from, to, quantity, method], rowIndex) => {
      // if the address is not owner / POLKASTARTER / pancake swap, it is considered as other wallet
      let source = nodeMap[from] === undefined ? 3 : nodeMap[from];
      let target = nodeMap[to] === undefined ? 3 : nodeMap[to];

      // don't show the link where the source and target is the same (avoid circular link)
      if (source === target) return;

      let currValue = parseFloat(quantity.replace(/,/g, ""));

      if (from === ZERO) {
        mintTotal += currValue; // mint to owner wallet
        return;
      } else if (to === ZERO) {
        mintTotal -= currValue; // burn
        return;
      }

      let linkKey = `${source}${target}`;
      if (source < target) {
        const currentVal = linkMap[linkKey] || 0;
        linkMap[linkKey] = currentVal + currValue;
      } else {
        linkKey = `${target}${source}`;
        const currentVal = linkMap[linkKey] || 0;
        linkMap[linkKey] = currentVal - currValue;
      }
    });

    const nodeBalance = {}; // the balance is used for calculating the links to HODL node
    nodeBalance[0] = mintTotal; // mint node should have an initial value equal to mintTotal at the beginning

    // create links using linkMap
    const parseLinks = Object.keys(linkMap).filter(l => linkMap[l] !== 0).map(l => {
      let sourceNode = l[0];
      let targetNode = l[1];
      let value = linkMap[l];

      // swap the source and target if the value is negative
      if (value < 0) {
        sourceNode = l[1];
        targetNode = l[0];
        value = -linkMap[l];
      }

      // update the balance
      nodeBalance[sourceNode] = nodeBalance[sourceNode] ? nodeBalance[sourceNode] - value : -value;
      nodeBalance[targetNode] = nodeBalance[targetNode] ? nodeBalance[targetNode] + value : +value;

      return {
        source: Number(sourceNode),
        target: Number(targetNode),
        value
      }
    });

    // add links for HODL
    Object.keys(nodeBalance).filter(nodeKey => nodeBalance[nodeKey] > 0).map(nodeKey => {
      const sourceNode = nodeKey;
      const targetNode = 4; // HODL node
      const value = nodeBalance[nodeKey];

      const link = {
        source: Number(sourceNode),
        target: Number(targetNode),
        value
      };

      // maybe the token goes into DEX / POLKASTARTER not considered as HODL
      if (sourceNode == 0 || sourceNode == 3) {
        parseLinks.push(link);
      }
    });

    setLinks(parseLinks);
  }, []);

  const [quiddPrice, setQuiddPrice] = useState('--');

  // API Reference: https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyQuotesLatest
  useEffect(() => {
    let response = null;
    new Promise(async (resolve, reject) => {
      try {
        response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=QUIDD&convert=USD', {
          headers: {
            'X-CMC_PRO_API_KEY': process.env.REACT_APP_CMC_API_KEY,
          },
        });
      } catch (ex) {
        response = null;
        // error
        console.log(ex);
        reject(ex);
      }
      if (response) {
        // success
        const json = response.data;
        const quiddPrice = json?.data?.QUIDD?.quote?.USD?.price?.toFixed(8) || '--';
        setQuiddPrice(quiddPrice);
        resolve(json);
      }
    });
  }, []);

  // Hide the diagram before the links are in calculation
  if (links.length === 0 || nodes.length === 0) {
    return <div>loading</div>
  }

  return (
    <div className="app">
      <div className="mb-8 text-center">
        <h3>Summary</h3>
        <p>
          Total Value QUIDD - This displays the total lifetime sum of transfer value in QUIDD tokens
          <br />
          Total number of transactions - This displays the total number of transactions being displayed.
        </p>
        <p>{hoveredLinkValue && `QUIDD tokens transferred: ${hoveredLinkValue}`}</p>
        <p>{hoveredNodeValue && `QUIDD tokens in USD: ${+hoveredNodeValue * quiddPrice}`}</p>
      </div>

      <Sankey
        data={{
          nodes,
          links
        }}
        nodeWidth={100}
        nodePadding={40}
      >
        {({ graph }) => {
          return (
            <g>
              {graph &&
                graph.links.map((link, i) => (
                  <Link
                    key={`sankey-link-${i}`}
                    link={link}
                    color={"rgba(0, 0, 0, 0.2)"}
                    setHoveredLinkValue={setHoveredLinkValue}
                  />
                ))}
              {graph &&
                graph.nodes.map((node, i) => (
                  <Node
                    key={`sankey-node-${i}`}
                    node={node}
                    color={node.color}
                    name={node.name}
                    setHoveredNodeValue={setHoveredNodeValue}
                  />
                ))}
            </g>
          );
        }}
      </Sankey>

    </div>
  );
}
