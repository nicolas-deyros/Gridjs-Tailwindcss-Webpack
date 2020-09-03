import { Grid } from 'gridjs';
import '../css/tailwind.css';

new Grid({
  columns: [
    'User',
    'Username',
    {
      id: 'users.Website',
      name: 'Website',
    },
  ],
  className: {
    table: 'text-xs',
    th: 'font-bold uppercase text-gray-500 text-center',
    td: 'hover:bg-gray-200',
  },
  sort: true,
  fixedHeader: true,
  search: {
    enabled: true,
  },
  pagination: {
    enabled: true,
    summary: true,
    limit: 5,
  },
  language: {
    search: {
      placeholder: '🔍 Search',
    },
    pagination: {
      previous: '👈',
      next: '👉',
      showing: 'Showing',
      results: () => 'Results',
    },
  },
  server: {
    url: 'https://jsonplaceholder.typicode.com/users',
    then: (data) =>
      data.map((users) => [users.name, users.username, users.website]),
  },
}).render(document.getElementById('wrapper'));
