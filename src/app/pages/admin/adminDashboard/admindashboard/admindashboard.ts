import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
interface Stat {
  label: string;
  value: string;
  icon: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  color: string;
}

interface RecentBooking {
  id: string;
  user: string;
  package: string;
  date: string;
  status: string;
  amount: string;
}
@Component({
  selector: 'app-admindashboard',
  standalone: false,
  templateUrl: './admindashboard.html',
  styleUrl: './admindashboard.css',
})
export class Admindashboard  implements OnInit {
  today: Date = new Date();

  stats: Stat[] = [
    { label: 'Total Packages', value: '24', icon: '📦', change: '+3', changeType: 'positive', color: 'blue' },
    { label: 'Total Bookings', value: '156', icon: '📋', change: '+12%', changeType: 'positive', color: 'green' },
    { label: 'Total Users', value: '1,234', icon: '👥', change: '+8%', changeType: 'positive', color: 'purple' },
    { label: 'Total Hotels', value: '45', icon: '🏨', change: '+2', changeType: 'positive', color: 'yellow' }
  ];

  recentBookings: RecentBooking[] = [
    { id: '#BK-001', user: 'John Doe', package: 'Maldives Paradise', date: '2024-12-15', status: 'Confirmed', amount: '$1,299' },
    { id: '#BK-002', user: 'Sarah Smith', package: 'Swiss Alps', date: '2024-12-14', status: 'Pending', amount: '$1,899' },
    { id: '#BK-003', user: 'Mike Johnson', package: 'Tokyo Explorer', date: '2024-12-13', status: 'Completed', amount: '$1,099' },
    { id: '#BK-004', user: 'Emma Wilson', package: 'Dubai Luxury', date: '2024-12-12', status: 'Cancelled', amount: '$2,499' }
  ];

  ngOnInit(): void {
    this.today = new Date();
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'Confirmed': 'green',
      'Pending': 'yellow',
      'Completed': 'blue',
      'Cancelled': 'red'
    };
    return colors[status] || 'gray';
  }

  // Export to Excel
  exportToExcel(): void {
    // Prepare data for export
    const exportData = this.recentBookings.map(booking => ({
      'Booking ID': booking.id,
      'User': booking.user,
      'Package': booking.package,
      'Date': booking.date,
      'Status': booking.status,
      'Amount': booking.amount
    }));

    // Create worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);

    // Set column widths
    ws['!cols'] = [
      { wch: 15 }, // Booking ID
      { wch: 20 }, // User
      { wch: 25 }, // Package
      { wch: 15 }, // Date
      { wch: 15 }, // Status
      { wch: 15 }  // Amount
    ];

    // Create workbook
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Bookings');

    // Generate Excel file
    const fileName = `Bookings_Report_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
  }

  // Export with stats summary
  exportFullReport(): void {
    // Create data with summary
const summaryData = [
  { 'Report Type': 'Summary', 'Value': '' },
  { 'Report Type': 'Total Bookings', 'Value': this.stats[1].value },
  { 'Report Type': 'Total Users', 'Value': this.stats[2].value },
  { 'Report Type': 'Total Packages', 'Value': this.stats[0].value },
  { 'Report Type': 'Total Hotels', 'Value': this.stats[3].value },
  { 'Report Type': '', 'Value': '' },
  { 'Report Type': 'Bookings Details', 'Value': '' }
];

    const bookingsData = this.recentBookings.map(booking => ({
      'Booking ID': booking.id,
      'User': booking.user,
      'Package': booking.package,
      'Date': booking.date,
      'Status': booking.status,
      'Amount': booking.amount
    }));

    // Combine data
    const allData = [...summaryData, ...bookingsData];

    // Create worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(allData);

    // Create workbook and save
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Report');

    const fileName = `Full_Report_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
  }
}
