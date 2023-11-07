
import './App.css';


function App() {
  return (
    <div className="App">

                  <nav className="flex-nav">
                    <div className="logo">
                      <img src="https://www.google.com/search?q=logo&sca_esv=580120143&tbm=isch&sxsrf=AM9HkKmXI-v_Di2gMzcDXhFkugYTL1N-eA:1699361837896&source=lnms&sa=X&ved=2ahUKEwiP5cSV-LGCAxXlXfEDHeiFDeEQ_AUoAXoECAIQAw&biw=1707&bih=833&dpr=1.13#imgrc=8stYvdAB75WU4M" alt="" />
                    </div>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">AboutUs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div class="sidebar-container">
            <ul class="sidebar-menu">
                <li class="sidebar-item">
                    <a href="#grid-section" class="sidebar-link">Grid Yapısı</a>
                </li>
                <li class="sidebar-item">
                    <a href="#color-section" class="sidebar-link">Color</a>
                </li>
                <li class="sidebar-item">
                    <a href="#font-section" class="sidebar-link">Yazı Boyutu</a>
                </li>
                <li class="sidebar-item">
                    <a href="#margin-padding-section" class="sidebar-link">Margin - Padding</a>
                </li>
                <li class="sidebar-item">
                    <a href="#slider-section" class="sidebar-link">Slider</a>
                </li>
                <li class="sidebar-item">
                    <a href="#table-section" class="sidebar-link">Tablo</a>
                </li>
                <li class="sidebar-item">
                    <a href="#img-section" class="sidebar-link">Resim</a>
                </li>
                <li class="sidebar-item">
                    <a href="#btn-section" class="sidebar-link">Buton</a>
                </li>
                <li class="sidebar-item">
                    <a href="#overflow-img-section" class="sidebar-link">Resim Overflow</a>
                </li>
                <li class="sidebar-item">
                    <a href="#navbar-section" class="sidebar-link">Nav Menu </a>
                </li>
                <li class="sidebar-item">
                    <a href="#dropdown-section" class="sidebar-link">Dropdown</a>
                </li>
                <li class="sidebar-item">
                    <a href="#form-section" class="sidebar-link">Form Elemanları</a>
                </li>

            </ul>
        </div>

    </div>
  );
}

export default App;
