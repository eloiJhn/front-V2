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
              powers
              <th>
              tools
              </th>
            </tr>
          </thead>
          <tbody>
            {
            champions.map((champion) => 
            <tr key={champion.id}>
              <td>{champion.nickname}</td>
              <td>{champion.powers}</td>
              <td>{champion.tools}</td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    );
        }
export default ChampionsData