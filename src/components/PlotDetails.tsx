import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface PlotDetailsProps {
  plotName: string;
  plotGeomId: string;
  surveyNo: string;
  area: string;
  seasons: string;
  lastHarvest: string;
  areaScore: string;
  croppingScore: string;
  plotScore: string;
}

export function PlotDetails({
  plotName,
  plotGeomId,
  surveyNo,
  area,
  seasons,
  lastHarvest,
  areaScore,
  croppingScore,
  plotScore
}: PlotDetailsProps) {
  return (
    <div>
      <h3 className="text-lg mb-4">📝 Plot Details Table</h3>
      <div className="w-full overflow-hidden">
  <table className="w-full table-fixed border border-gray-300">
    <thead className="bg-green-100">
      <tr className="text-center">
        <th className="border p-2 align-middle">Plot Name</th>
        <th className="border p-2">Plot Geom Id</th>
        <th className="border p-2">Survey No</th>
        <th className="border p-2">Plot Area</th>
        <th className="border p-2 align-middle">No. of Crop Seasons</th>
        <th className="border p-2">Last Harvesting Date</th>
        <th className="border p-2">Area Score</th>
        <th className="border p-2">Cropping Frequency Score</th>
        <th className="border p-2">Plot Score</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="border p-2 break-words ">Plot 1</td>
        <td className="border p-2 break-words">166916_21022024_EJGQAV75</td>
        <td className="border p-2 break-words">N/A</td>
        <td className="border p-2 break-words">2.6</td>
        <td className="border p-2 break-words">6</td>
        <td className="border p-2 break-words">2024-06-07</td>
        <td className="border p-2 break-words">5.0</td>
        <td className="border p-2 break-words">35.0</td>
        <td className="border p-2 break-words">75.43</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
}
