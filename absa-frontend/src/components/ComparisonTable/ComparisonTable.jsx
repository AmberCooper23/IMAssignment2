import React from "react";

function ComparisonTable() {
    return (
        <table className="comparisonTable">
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
                    <td className="comparisonTableBestFor">First time property buyers</td>
                    <td className="comparisonTableRiskLevel">Low</td>
                    <td className="comparisonTableTimeCommitment">High(saving focus)</td>
                    <td className="comparisonTableGoal">Own Property</td>
                </tr>
            </tbody>

             <tbody className="comparisonTableBody">
                <tr className="comparisonTableRow">
                    <td className="comparisonTableTrack">The Explorer</td>
                    <td className="comparisonTableBestFor">Balance seekers</td>
                    <td className="comparisonTableRiskLevel">Medium</td>
                    <td className="comparisonTableTimeCommitment">Medium (balanced)</td>
                    <td className="comparisonTableGoal">R250k portfolio, 20% offshore</td>
                </tr>
            </tbody>

            <tbody className="comparisonTableBody">
                <tr className="comparisonTableRow">
                    <td className="comparisonTableTrack">The Maverick</td>
                    <td className="comparisonTableBestFor">Aggressive investors</td>
                    <td className="comparisonTableRiskLevel">High</td>
                    <td className="comparisonTableTimeCommitment">Low (automated)</td>
                    <td className="comparisonTableGoal">R500k, 40% offshore</td>
                </tr>
            </tbody>
            
        </table>
    );
}

export default ComparisonTable