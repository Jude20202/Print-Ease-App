import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { topUsers } from "@/lib/mock-data";

export default function TopUsersTable() {
  return (
    <Card>
      <h3 className="text-sm font-semibold text-brand-charcoal mb-4">Top Users</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-2 px-3 text-xs font-medium text-gray-500 uppercase">
                User / Team
              </th>
              <th className="text-right py-2 px-3 text-xs font-medium text-gray-500 uppercase">
                Jobs
              </th>
              <th className="text-right py-2 px-3 text-xs font-medium text-gray-500 uppercase">
                Pages
              </th>
              <th className="text-right py-2 px-3 text-xs font-medium text-gray-500 uppercase">
                Est. Cost
              </th>
              <th className="text-center py-2 px-3 text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {topUsers.map((user) => (
              <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-3">
                  <p className="font-medium text-brand-charcoal">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.team}</p>
                </td>
                <td className="py-3 px-3 text-right text-brand-charcoal">{user.jobs}</td>
                <td className="py-3 px-3 text-right text-brand-charcoal">{user.pages}</td>
                <td className="py-3 px-3 text-right text-brand-charcoal">{user.cost}</td>
                <td className="py-3 px-3 text-center">
                  <Badge variant={user.status}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
