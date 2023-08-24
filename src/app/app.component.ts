import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage =0;
  images = [
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',

    },

    {
      title: 'At the river',
      url:
        'https://images.unsplash.com/photo-1519852476561-ec618b0183ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the mountain',
      url:
        'https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the citycenter',
      url:
        'https://images.unsplash.com/photo-1512531123205-560f5974e686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',

    },

    {
      title: 'At the river',
      url:
        'https://images.unsplash.com/photo-1519852476561-ec618b0183ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the mountain',
      url:
        'https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the citycenter',
      url:
        'https://images.unsplash.com/photo-1512531123205-560f5974e686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },{
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',

    },

    {
      title: 'At the river',
      url:
        'https://images.unsplash.com/photo-1519852476561-ec618b0183ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the mountain',
      url:
        'https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the citycenter',
      url:
        'https://images.unsplash.com/photo-1512531123205-560f5974e686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },{
      title: 'At the beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the forest',
      url:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',

    },

    {
      title: 'At the river',
      url:
        'https://images.unsplash.com/photo-1519852476561-ec618b0183ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the mountain',
      url:
        'https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },

    {
      title: 'At the citycenter',
      url:
        'https://images.unsplash.com/photo-1512531123205-560f5974e686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    }
  ];
  checkWindowIndex(index:number){
    return Math.abs(this.currentPage - index) < 4;
  }
}
