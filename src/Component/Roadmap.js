import React, { useState } from 'react';
import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';
import CytoscapeComponent from 'react-cytoscapejs';
import axios from 'axios';

/* eslint no-restricted-globals: ["off"] */

Cytoscape.use(COSEBilkent);

const Roadmap = ({props}) => {

  const [data,setData] = useState();

  var value = location.search.split("?rid=");
  var rid = value[1]

  const [check, setCheck] = useState(true);

  if(check === true){
    getData();
    setCheck(false);
  }

  async function getData() {
    try{
        const response = await axios.get('http://172.20.10.6:8000/getroadmapdetail', {
            params : {
                rid : rid
            }
        });

        console.log(response.data);
        setData(response.data);
    }catch(error){
        alert(error);
    }
  }

  const viewCytoscape = (
    <CytoscapeComponent
      elements = {data}

      style={ { width: '100%', height: '100vh' } }
      stylesheet = {[
        {
          selector: 'node',
          style: {
              'background-color': 'skyblue',
              'label': 'data(label)',
          }
        },

        {
            selector: 'edge',
            style: {
                'width': 3,
                'line-color': '#ccc',
                'curve-style': 'bezier',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle',
            }
        }
      ]}
      
      cy={(cy) => {
        var layout = cy.layout({
          name: 'cose-bilkent',
          idealEdgeLength : 50,
        });
        
        layout.run();

        cy.on('taphold', function (e) {
          const info = e.target.data('info')
          if (info && info !== '') {
              alert(info)
          }
          const bookName = e.target.data('bookName')
          if (bookName && bookName !== ''){
              
              alert(bookName);
          }
      });
      }}
      >

    </CytoscapeComponent>
  );  

  return(
    <div>
      {viewCytoscape}
    </div>

  );
}

export default Roadmap;