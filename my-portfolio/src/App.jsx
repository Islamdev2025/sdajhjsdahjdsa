import React, { useState } from 'react';
import { Menu, X, Download, Image, FileText, Briefcase, Home, ExternalLink } from 'lucide-react';
import img1 from './assets/bf6c6648-a431-421a-a8bc-04fec5669e2e.jpg';
import img2 from './assets/WhatsApp Image 2025-12-19 at 02.18.55.jpeg'
import img3 from './assets/WhatsApp Image 2025-12-19 at 02.26.02.jpeg'
import img4 from './assets/WhatsApp Image 2025-12-19 at 02.29.40.jpeg'
import img5 from './assets/WhatsApp Image 2025-12-19 at 02.32.33.jpeg'
import img6 from './assets/WhatsApp Image 2025-12-19 at 02.36.08.jpeg'
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const srsData = {
    title: "СРС: Основы компьютерной графики",
    description: "Самостоятельная работа студента по основам компьютерной графики",
    url: "https://drive.google.com/drive/folders/1DOow0jDI3_s7GEa0geeCNp88uUtMLWqK?usp=sharing",
    canDownload: false,
    type: "document"
  }

  const presentations = [
    {
      id: 1,
      name: "Алгоритмы и Методы Рендеринга в Компьютерной Графике",
      description: "Алгоритмы и Методы Рендеринга в Компьютерной Графике: Обзор",
      url_canva: "https://www.canva.com/design/DAG74oBdQkA/fcnNdHNXIbgrYNBm-TpfOw/edit?utm_content=DAG74oBdQkA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      canDownload: false,
      type: "presentation"
    },
    {
      id: 2,
      name: "Генеративные Модели: Творчество без Границ",
      description: "___",
      url_canva: "https://www.canva.com/design/DAG74_18rOo/Tn_3ve8TI2yInb90JpZHhw/edit?utm_content=DAG74_18rOo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      canDownload: false,
      type: "presentation"
    }
  ];

  const coreldrawGallery = [
    {
      id: 1,
      title: "лабораторная 1",
      category: "CorelDraw",
      image: img1,
      canDownload: true
    },
    {
      id: 2,
      title: "Работа в слоях",
      category: "CorelDraw",
      image: img2,
      canDownload: true
    },
    {
      id: 3,
      title: "Перетекание. Прозрачность.",
      category: "CorelDraw",
      image: img3,
      canDownload: true
    },
    {
      id: 4,
      title: "Заливка. Обводка.",
      category: "CorelDraw",
      image: img4,
      canDownload: true
    },
    {
      id: 5,
      title: "Рисование простых примитивов",
      category: "CorelDraw",
      image: img5,
      canDownload: true
    },
    {
      id: 6,
      title: "Figma design",
      category: "Figma",
      image: img6,
      canDownload: true
    }
  ];

  const allProjects = [
    srsData,
    ...presentations
  ];

  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'download';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const NavItem = ({ icon: Icon, label, section }) => (
    <button
      onClick={() => {
        setActiveSection(section);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        activeSection === section
          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/50'
          : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-lg">
                I
              </div>
              <span className="text-xl font-bold text-gray-800">Islam Dev</span>
            </div>

            <nav className="hidden md:flex gap-2">
              <NavItem icon={Home} label="Главная" section="home" />
              <NavItem icon={Briefcase} label="Портфолио" section="portfolio" />
              <NavItem icon={Image} label="CorelDraw" section="gallery" />
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-green-50 rounded-lg text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-2">
              <NavItem icon={Home} label="Главная" section="home" />
              <NavItem icon={Briefcase} label="Портфолио" section="portfolio" />
              <NavItem icon={Image} label="CorelDraw" section="gallery" />
            </nav>
          )}
        </div>
      </header>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl font-bold text-white shadow-2xl shadow-green-500/50 animate-pulse">
                  I
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                   Добро пожаловать!
              </h1>
              <p className="text-xl text-gray-700 max-w-2.5xl mx-auto">
                  Я создаю программы, СРС и визуальный контент по компьютерной графике.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: FileText, title: "СРС документация", desc: "Профессиональная техническая документация", section: "portfolio" },
                { icon: Briefcase, title: "Презентации", desc: "Качественные презентации в Canva", section: "portfolio" },
                { icon: Image, title: "CorelDraw", desc: "Векторная графика и дизайн", section: "gallery" }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSection(item.section)}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-2xl hover:shadow-green-500/20 transition-all hover:scale-105 text-left h-48 flex flex-col"
                >
                  <item.icon className="w-12 h-12 mb-4 text-green-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-1">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-2 flex-grow">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Portfolio Section */}
        {activeSection === 'portfolio' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Мои работы</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-2xl hover:shadow-green-500/20 transition-all hover:scale-105 group h-80 flex flex-col">
                  <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                    {project.type === 'document' && <FileText className="w-10 h-10 text-green-600" />}
                    {project.type === 'presentation' && <Briefcase className="w-10 h-10 text-emerald-600" />}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">
                    {project.title || project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{project.description}</p>
                  <div className="flex gap-3 flex-wrap mt-auto">
                    <a
                      href={project.url || project.url_canva}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
                    >
                      <ExternalLink size={16} />
                      Открыть
                    </a>
                    {project.canDownload && (
                      <button
                        onClick={() => handleDownload(project.url || project.url_canva, project.title || project.name)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-all border border-green-200"
                      >
                        <Download size={16} />
                        Скачать
                      </button>
                    )}
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CorelDraw Gallery Section */}
        {activeSection === 'gallery' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">CorelDraw галерея</h2>
              <p className="text-gray-600">Работы созданные в CorelDraw</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {coreldrawGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border-2 border-green-200 hover:border-green-400 cursor-pointer overflow-hidden group transition-all hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-green-500/20"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center bg-white/40 group-hover:bg-white/20 transition-all p-6">
                    <div className="w-full h-full overflow-hidden rounded-xl">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
  />
</div>
                    <p className="text-base text-gray-800 font-semibold mb-1 text-center">{item.title}</p>
                    <p className="text-sm text-gray-600 mb-3 text-center">{item.category}</p>
                    <div className="mt-auto flex items-center gap-1 text-xs text-green-600">
                      <Download size={14} />
                      <span>Скачать</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 hover:bg-white/10 rounded-lg transition-all text-white"
            >
              <X size={24} />
            </button>
            <div className="aspect-video bg-white rounded-2xl border-4 border-green-500 flex items-center justify-center shadow-2xl">
              <div className="text-center p-8">
<div className="aspect-video bg-white rounded-2xl border-4 border-green-500 shadow-2xl overflow-hidden">
  <img
    src={selectedImage.image}
    alt={selectedImage.title}
    className="w-full h-full object-contain"
  />
</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedImage.title}</h3>
                <p className="text-gray-600 text-lg mb-4">{selectedImage.category}</p>
                {selectedImage.canDownload && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(selectedImage.image, selectedImage.title);
                    }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all mx-auto"
                  >
                    <Download size={20} />
                    Скачать изображение
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-green-100 py-8 text-center text-gray-600 bg-white/50">
        <p className="font-medium">© 2025 Islam Dev. Все права защищены.</p>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}