import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { connect } from "react-redux"

import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

import { Switch } from "@headlessui/react"
import { Link } from "react-router-dom"

const classNames =(...classes) =>{
  return classes.filter(Boolean).join(' ')
}

function Contact(){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


    const [loading, setLoading] = useState(false)

    const [agreed, setAgreed] = useState(false)

    const [formData, setFormData] = useState({
      'name':'',
      'email':'',
      'subject':'',
      'message':'',
      'phone':'',
      'budget':''
    }
    )

    const {name ,email ,subject ,message ,phone ,budget } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = e => {
      setLoading(true);
      e.preventDefault();
      if(agreed){
        const config = {
          header: {
            'Content-Type': 'application/json'
          }
        }
      
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('subject', subject)
        formData.append('message', message)
        formData.append('phone', phone)
        formData.append('budget', budget)

        const fetchData = async () =>{
          /* funcion de post */
          axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`, formData, config)
          .then(res =>{
            setLoading(false);
            toast.success('Mensaje enviado correctamente, lo contestate lo antes posible');
          }).catch(err => {
            setLoading(false);
            toast.error('Error al enviar el mensaje');

            }
          )
        }

        fetchData()
      }else{
        toast.error('Debes aceptar los Términos y Políticas de privacidad para enviar el mensaje')
      }
    }

    return(
        <FullWidthLayout>
            <div className="relative ">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-gilroy-black tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
              arcu.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for careers?{' '}
              <a href="#" className="font-gilroy-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className=" py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
         
        {/* formulario de envío */}
            <form onSubmit={e => onSubmit(e)} className="grid grid-cols-1 gap-y-6">
              <div>
                <label className="sr-only">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  value={name}
                  name='name'
                  onChange={e => onChange(e)}
                  required
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Nombre Completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={e=>onChange(e)}
                  type="email"
                  required
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Teléfono
                </label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={e=>onChange(e)}
                  required
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Teléfono"
                />
              </div>
              <div>
                <label className="sr-only">
                  Asunto
                </label>
                <input
                  type="text"
                  value={subject}
                  name='subject'
                  onChange={e => onChange(e)}
                  required
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Asunto del mail"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={message}
                  onChange={e => onChange(e)}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                  placeholder="Message"
                  required
                />
              </div>

                <div>
                    <label className="block text-sm font-gilroy-medium text-gray-700">
                        Presupuesto (opcional)
                    </label>
                    <select
                        id="budget"
                        name="budget"
                        onChange={e => onChange(e)}
                        value={budget}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="" disabled selected>Sin Presupuesto</option>
                        <option value="0-5,000">$0 - $5,000</option>
                        <option value="5,000-10,000">$5,000 - $10,000</option>
                        <option value="10,000+">$10,000+</option>
                    </select>
                </div>

                <Switch 
                          checked={agreed}
                          onChange={setAgreed}
                          className={classNames(
                            agreed ? 'bg-blue-600' : 'bg-gray-200',
                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 dark:text-dark-txt border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                            )}
                        >
                          <span className="sr-only">Acepta las politicas</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                                agreed ? 'translate-x-5' : 'translate-x-0',
                                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                            />

                        </Switch>

                        <div className="ml-3">
                        <p className="text-base text-gray-500">
                            Al seleccionar esto, aceptas las{' '}
                            
                            <Link to="/privacidad" className="font-medium  underline">
                            <span className="text-blue-700 cursor-pointer">Politicas de Privacidad</span>
                            </Link>{' '}
                            y{' '}
                            
                            <Link to="/terminos" className="font-medium text-blue-700 underline">
                            <span className="text-blue-700 cursor-pointer">Terminos de Uso</span>
                            </Link>
                            .
                        </p>
                        </div>

              <div>
{        
          loading ?
                <button

                  className="float-right inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-gilroy-medium rounded-full text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Cargando...
                </button>:
                                <button
                  type="submit"
                  className="float-right inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-gilroy-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              }
              </div>
            </form>

         
          </div>
        </div>
      </div>
    </div>
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{

})(Contact)