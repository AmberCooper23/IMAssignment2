import React from "react";
import "./ComparisonTable.css";

function ComparisonTable() {
    return (
        <article className="comparisonTableCard">
           <table className="comparisonTable">
            <caption className="comparisonTableTitle">
                Track Comparison
            </caption>
            <thead className="comparisonTableHeadRow" >
                <tr>
                    <th className="comparisonTableHeadCell">
                        Track
                    </th>
                    <th className="comparisonTableHeadCell">
                        Best For
                    </th>
                    <th className="comparisonTableHeadCell">
                        Risk Level
                    </th>
                    <th className="comparisonTableHeadCell">
                        Time Commitment
                    </th>
                    <th className="comparisonTableHeadCell">
                        Year 5 Goal
                    </th>
                </tr>
            </thead>

            <tbody className="comparisonTableBody">
                <tr className="comparisonTableRow">
                    <td className="comparisonTableTrack">The Builder</td>
                    <td className="comparisonTableCell">First time property buyers</td>
                    <td className="comparisonTableRiskLevel"><span className="riskLow">Low</span></td>
                    <td className="comparisonTableCell">High(saving focus)</td>
                    <td className="comparisonTableGoal">Own Property</td>
                </tr>
            </tbody>

             <tbody className="comparisonTableBody">
                <tr className="comparisonTableRow">
                    <td className="comparisonTableTrack">The Explorer</td>
                    <td className="comparisonTableCell">Balance seekers</td>
                    <td className="comparisonTableRiskLevel"><span className="riskMedium"> Medium </span></td>
                    <td className="comparisonTableCell">Medium (balanced)</td>
                    <td className="comparisonTableGoal">R250k portfolio, 20% offshore</td>
                </tr>
            </tbody>

            <tbody className="comparisonTableBody">
                <tr className="comparisonTableRow">
                    <td className="comparisonTableTrack">The Maverick</td>
                    <td className="comparisonTableCell">Aggressive investors</td>
                    <td className="comparisonTableRiskLevel"><span className="riskHigh">High</span></td>
                    <td className="comparisonTableCell">Low (automated)</td>
                    <td className="comparisonTableGoal">R500k, 40% offshore</td>
                </tr>
            </tbody>
        </table> 
        </article>
        
    );
}

export default ComparisonTable