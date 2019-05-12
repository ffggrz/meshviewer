module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': '/grafana/dashboard/db/knoten-statistik?var-NodeName=All&var-NodeID={NODE_ID}',
        'image': '/grafana/render/dashboard-solo/db/meshviewer-graphen?panelId=2&theme=light&width=650&height=350&var-NodeID={NODE_ID}&from=now-2d',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      },
      {
        'name': 'Trafficstatistik',
        'href': '/grafana/dashboard/db/knoten-statistik?var-NodeName=All&var-NodeID={NODE_ID}',
        'image': '/grafana/render/dashboard-solo/db/meshviewer-graphen?panelId=3&theme=light&width=650&height=350&var-NodeID={NODE_ID}&from=now-2d',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      },
      {
        'name': 'Airtime',
        'href': '/grafana/dashboard/db/knoten-statistik?var-NodeName=All&var-NodeID={NODE_ID}',
        'image': '/grafana/render/dashboard-solo/db/meshviewer-graphen?panelId=5&theme=light&width=650&height=350&var-NodeID={NODE_ID}&from=now-2d',
        'title': 'Knoten {NODE_ID} - weiteren Statistiken'
      }
    ],
    'globalInfos': [
      {
        'name': 'Wochenstatistik',
        'href': '/grafana/dashboard/db/ubersicht',
        'image': '/grafana/render/dashboard-solo/db/meshviewer-graphen?panelId=4&theme=light&width=650&height=350',
        'title': 'Wochenstatistik - weiteren Statistiken'
      },
      {
        'name': 'Jahresstatistik',
        'href': '/grafana/dashboard/db/ubersicht',
        'image': '/grafana/render/dashboard-solo/db/meshviewer-graphen?panelId=1&theme=light&width=650&height=350',
        'title': 'Jahresstatistik - weiteren Statistiken'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      '/meshviewer/data/'
    ],
    'siteName': 'Freifunk Gera-Greiz',
    'mapLayers': [
      {
        'name': 'Freifunk Gera-Greiz',
        'url': 'https://tiles.freifunk-gera-greiz.de/{z}/{x}/{y}.png',
        'config': {
          'maxZoom': 19,
          'attribution': '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
      },
      {
        'name': 'HERE',
        'url': 'https://{s}.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=sIwIbz1DCjVDY2jdsnZ1&app_code=Uvcf9-uUVqoJA1_1LVSj8Q&lg=deu',
        'config': {
          'attribution': 'Map &copy; 1987-2019 <a href="http://developer.here.com">HERE</a>',
          'subdomains': '1234',
          'maxZoom': 20
        }
      },
      {
        'name': 'HERE.hybridDay',
        'url': 'https://{s}.aerial.maps.api.here.com/maptile/2.1/maptile/newest/{variant}/{z}/{x}/{y}/256/png8?app_id=sIwIbz1DCjVDY2jdsnZ1&app_code=Uvcf9-uUVqoJA1_1LVSj8Q&lg=deu',
        'config': {
          'attribution': 'Map &copy; 1987-2019 <a href="http://developer.here.com">HERE</a>',
          'subdomains': '1234',
          'variant': 'hybrid.day',
          'maxZoom': 20
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        50.9952,
        11.6750
      ],
      // Southeast
      [
        50.5985,
        12.3871
      ]
    ],
    'domainNames': [
      {
        'domain': 'ffggrz',
        'name': 'Gera-Greiz'
      }
    ],
    'linkList': [
      {
        'title': 'Kontakt',
        'href': '/kontakt'
      }
    ]
  };
};
