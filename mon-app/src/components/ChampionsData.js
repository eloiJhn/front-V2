import React from "react";

function ChampionsData(props) {


    const { champions } = props
  
  return (
  
  <div>
        <table>
          <thead>
            <tr>
              <th>
                id
              </th>
              <th>
                nickname
              </th>
              <th>
              powers
              </th>
              <th>
              tools
              </th>
            </tr>
          </thead>
          <tbody>
            {
            champions?.map((champion, i) => 
            <tr>
              <td key={champion?.id}>{champion?.id}</td>
              <td key={champion?.nickname}>{champion?.nickname}</td>
              <td key={champion?.nickname + i}>{
                champion?.powers?.map((power) =>
                <div key={power?.id}>
                  <div>{power?.name}</div>
                </div>
                )
              }</td>
              <td key={i}>{
                champion?.tools?.map((tool) =>
                <div key={tool?.id}>
                  <div>{tool?.name}</div>
                </div>
                )
              }</td>
              </tr>
            
            )
            }
            </tbody>
        </table>
      </div>
    );
        }
export default ChampionsData