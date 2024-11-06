"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import useBackdrop from '@/hooks/useBackdrop';
import { Copy } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';

let formSchema = yup.object({
  name: yup.string().required(" Name is Required"),
  msg: yup.string().required("Message is Required"),
  subject: yup.string().required("Subject is Required"),

  email: yup.string().email("Please Check Email").required("Email is Required"),

});
const ContactForm = () => {
  const [initialValues, setInitailValues] = useState({ name: "", subject: "", phone: "", email: "", msg: "" })
  const { openBackdrop, closeBackdrop, BackdropComponent } = useBackdrop();
  const formSubmit = async (values, { setSubmitting, resetForm }) => {
    openBackdrop();
    try {

      const payload = { ...values }
      const res = await axios.post(`/api/contact`, payload);
      if (res.status === 200) {
        alert("Thank You we will contact you as soon as posible.")
      }

      setSubmitting(false);

    } catch (error) {
      alert("error Submitting Data")
    }
    resetForm();
    closeBackdrop();

  }
  return (
    <>
      <BackdropComponent />

      <div className='group order-1 lg:order-2 w-full h-full rounded-[24px] p-[1em] md:p-[2em] bg-[#000]/[20%] flex justify-between flex-col gap-5  ' style={{ backdropFilter: "blur(7px)", WebkitBackdropFilter: "blur(7.1px)" }}>
        <div className='flex flex-col gap-5 md:pb-[120px]'>
          <h2 className=' text-[2em] md:text-[2.6em] font-semibold text-balance text-[--light-text]' >Interested but don&apos;t know where to start?</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={formSubmit}
            enableReinitialize={true}
          >
            {({ isSubmitting, handleChange, handleBlur, values, setFieldValue }) => {



              return (
                <Form className='flex flex-col gap-5'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="relative flex w-full">
                      <Field type="text" placeholder='Name*' name='name' className="placeholder:text-[#dcefd8]/[20%] text-[#dcefd8]   w-full  h-[55px] md:h-[65px] text-[1.1em] md:text-[1.4em] px-5  bg-[#dcefd8]/[5%] rounded-[16px] outline-none border border-[#dcefd8]/[5%] focus:border-[--accent-green]" />
                      <ErrorMessage name='name' component="span" className='absolute top-[102%] left-0 text-[#e61717] text-[10px]' />
                    </div>
                    <div className="relative flex w-full">
                      <Field type="text" placeholder='Email*' name='email' className="placeholder:text-[#dcefd8]/[20%] text-[#dcefd8]   w-full  h-[55px] md:h-[65px] text-[1.1em] md:text-[1.4em] px-5  bg-[#dcefd8]/[5%] rounded-[16px] outline-none border border-[#dcefd8]/[5%] focus:border-[--accent-green]" />
                      <ErrorMessage name='email' component="span" className='absolute top-[102%] left-0 text-[#e61717] text-[10px]' />
                    </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="relative flex w-full">
                      <Field type="text" placeholder='Phone' name='phone' className="placeholder:text-[#dcefd8]/[20%] text-[#dcefd8]   w-full  h-[55px] md:h-[65px] text-[1.1em] md:text-[1.4em] px-5  bg-[#dcefd8]/[5%] rounded-[16px] outline-none border border-[#dcefd8]/[5%] focus:border-[--accent-green]" />
                      <ErrorMessage name='phone' component="span" className='absolute top-[102%] left-0 text-[#e61717] text-[10px]' />
                    </div>
                    <div className="relative flex w-full">
                      <Field type="text" placeholder='Subject*' name='subject' className="placeholder:text-[#dcefd8]/[20%] text-[#dcefd8]   w-full  h-[55px] md:h-[65px] text-[1.1em] md:text-[1.4em] px-5  bg-[#dcefd8]/[5%] rounded-[16px] outline-none border border-[#dcefd8]/[5%] focus:border-[--accent-green]" />
                      <ErrorMessage name='subject' component="span" className='absolute top-[102%] left-0 text-[#e61717] text-[10px]' />
                    </div>
                  </div>
                  <div className="relative flex w-full">
                    <textarea type="text" placeholder='Your message*' value={values.msg} name='msg' onChange={handleChange} onBlur={handleBlur} className="placeholder:text-[#dcefd8]/[20%] text-[#dcefd8]   w-full h-[140px] md:h-[200px] text-[1.1em] md:text-[1.4em] px-5 py-5  bg-[#dcefd8]/[5%] rounded-[16px] outline-none border border-[#dcefd8]/[5%] focus:border-[--accent-green]" />
                    <ErrorMessage name='msg' component="span" className='absolute top-[102%] left-0 text-[#e61717] text-[10px]' />
                  </div>
                  <button disabled={isSubmitting} className=' h-[55px] md:h-[65px] w-full font-medium text-[1.1em] md:text-[1.4em] text-[--background] bg-[var(--accent-green)] rounded-[16px]'> Send Message</button>

                </Form>
              )
            }
            }
          </Formik>
        </div>
        <div className='flex flex-col'>
          <p className='text-[1.2em] opacity-30 text-[--light-text]'>

            Or email us at:
          </p>
          <div className='w-full  h-[55px] md:h-[65px] rounded-[16px] border border-[#dcefd8]/[20%]  hover:border-[#dcefd8]/[50%] flex '>
            <button className='w-[8%] min-w-[75px] flex justify-center items-center h-full'>
              <Copy className='text-[#dcefd8]/[30%]' />
            </button>
            <Link href="mailto:support@sanctity.ai" className='h-full w-full justify-center flex items-center text-[1.1em] md:text-[1.4em] text-[#dcefd8]/[80%]'>support@sanctity.ai</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
