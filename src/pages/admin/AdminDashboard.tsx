
import AdminSidebar from '@/components/admin/Sidebar';
import AdminHeader from '@/components/admin/Header';
import DashboardStats from '@/components/admin/DashboardStats';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to your admin dashboard.</p>
          </div>
          
          <DashboardStats />
          
          <div className="mt-6">
            <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
            <div className="rounded-lg border p-4">
              <ul className="space-y-4">
                <li className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">New order #1234</p>
                    <p className="text-sm text-muted-foreground">John Doe placed an order for 5 items</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">
                    2 hours ago
                  </div>
                </li>
                <li className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M17.5 6.299c4.5.019 4.5 6.701 0 6.701H7.5c-4.5 0-4.5-6.701 0-6.701"></path>
                      <path d="M13.5 20V6.5c0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5V20M13.5 20H7.5"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">New product added</p>
                    <p className="text-sm text-muted-foreground">Admin added "Organic Blueberries" to inventory</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">
                    4 hours ago
                  </div>
                </li>
                <li className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">New customer registered</p>
                    <p className="text-sm text-muted-foreground">Jane Smith created a new account</p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">
                    6 hours ago
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
