import React from 'react';
import { Link } from 'react-router-dom';
import novatechLogoFoot from '../../../assets/images/novatechLogoFoot.png';
import './AppFooter.css';

const AppFooter = () => {
  return (
    <>
      <section className='container-fluid footer'>
        <div className='row mx-auto  mx-0 px-0'>
          <article className='col-sm-12 col-md-4 mt-2 mb-1'>
            <a
              className='navbar-brand d-flex align-items-center justify-content-center'
              href='./index.html'
            >
              <div>
                <span className='navbar-brand d-flex align-items-center justify-content-center' to='./'>
                  <img
                    className='icons imgFooter'
                    src={novatechLogoFoot}
                    alt=''
                  />
                </span>
                {/* redirijo al home? */}
                <h6 className='my-auto text-center'>tienda de electronica</h6>
              </div>
            </a>
            <div className='mt-1 d-flex justify-content-center '>
              <h5 className='my-auto ms-1 me-3 text-center m-2'>¡Seguinos!</h5>
              <div className='d-flex'>
                {/* le ponemos enlaces de fb ig y tw.. agregamos mas?? */}
                <a
                  className='nav-link icons text-black text-decoration-none m-2 '
                  href='/#'
                >
                  {' '}
                  <i className='bi bi-facebook '></i>
                </a>
                <a
                  className='nav-link icons text-black text-decoration-none m-2 '
                  href='/#'
                >
                  {' '}
                  <i className='bi bi-instagram'></i>
                </a>
                <a
                  className='nav-link icons text-black text-decoration-none m-2 '
                  href='/#'
                >
                  {' '}
                  <i className='bi bi-twitter '></i>
                </a>
              </div>
            </div>
          </article>
          <article className='col-sm-12 col-md-4 mt-2  mb-1 text-center'>
            <h5>Contacto</h5>

            <div className='d-flex justify-content-center'>
              <div>
                <i className='bi bi-geo-alt'></i>
              </div>
              <div className='mx-2'>
                <p className='mb-1'>Gral. Paz 578 - San Miguel de Tucumán</p>
              </div>
            </div>

            <div className='d-flex justify-content-center'>
              <div>
                <i className='bi bi-telephone-forward'></i>
              </div>
              <div className='mx-2'>
                <p className='mb-1'>(+54) 381.....</p>
              </div>
            </div>

            <div className='d-flex justify-content-center'>
              <div>
                <i className='bi bi-envelope'></i>
              </div>
              <div className='mx-2'>
                <p href='../views/error404.html' className='nav-link mb-1'>
                  contacto@gmail.com
                </p>
              </div>
            </div>
          </article>
          <article className='col-sm-12 col-md-4 mt-2 mb-1 text-center'>
            <h5>Información</h5>
            <Link className='nav-link icons' to='/E404'>
              Preguntas frecuentes
            </Link>
            <Link className='nav-link icons' to='/E404'>
              Atención al cliente
            </Link>
            <Link className='nav-link icons' to='/E404'>
              Terminos y condiciones
            </Link>
          </article>
        </div>
      </section>
      <div>
        <i className='fa-solid fa-arrow-up-long'></i>
      </div>
      <section className='downFooter py-1'>
        <p className='text-center text-dark mb-0 '>
          &copy; Todos los derechos reservados
        </p>
      </section>
    </>
  );
};

export default AppFooter;
