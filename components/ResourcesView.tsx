import React from 'react';
import { ExternalLink, Book, Globe, Shield, Flag } from 'lucide-react';

const ResourcesView: React.FC = () => {
  const resources = [
    {
      category: 'Oficialūs šaltiniai',
      icon: Shield,
      links: [
        { title: 'Lietuvos Respublikos valstybės vėliavos protokolas', url: 'https://www.urm.lt/ministerija/protokolo-informacija/lietuvos-respublikos-valstybes-veliavos-protokolas/245' },
        { title: 'Valstybinė lietuvių kalbos komisija', url: 'http://www.vlkk.lt/' },
      ]
    },
    {
      category: 'Tarptautinis protokolas',
      icon: Flag,
      links: [
        { title: 'Jungtinių Tautų protokolas (UN Protocol)', url: 'https://www.un.org/dgacm/en/content/protocol' },
        { title: 'Europos Komisijos protokolo tarnyba', url: 'https://commission.europa.eu/about-european-commission/organizational-structure/protocol-service_en' },
      ]
    },
    {
      category: 'Kultūrinis etiketas',
      icon: Globe,
      links: [
        { title: 'Cultural Atlas - Etiquette by Country', url: 'https://culturalatlas.sbs.com.au/' },
        { title: 'Commisceo Global - Country Guides', url: 'https://www.commisceo-global.com/country-guides/' },
      ]
    },
    {
      category: 'Tinklaraščiai ir gidai',
      icon: Book,
      links: [
        { title: 'Emily Post Institute', url: 'https://emilypost.com/' },
        { title: 'Debrett\'s Etiquette', url: 'https://debretts.com/etiquette/' },
      ]
    }
  ];

  return (
    <div className="animate-fade-in-up">
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Naudingi šaltiniai</h2>
      <p className="text-gray-600 mb-8">
        Čia rasite nuorodas į patikimus išorinius šaltinius, kurie padės gilinti žinias apie etiketą, protokolą ir kultūrinius skirtumus.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4 text-primary-700">
              <section.icon className="w-6 h-6 mr-2" />
              <h3 className="font-bold text-lg">{section.category}</h3>
            </div>
            <ul className="space-y-3">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start text-gray-700 hover:text-primary-600 transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-gray-400 group-hover:text-primary-500" />
                    <span className="text-sm font-medium">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesView;
