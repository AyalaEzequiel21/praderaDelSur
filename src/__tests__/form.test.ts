// import { render, screen, fireEvent } from '@testing-library/react';
// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { FormContact } from '../pages';
// import { FormContactValues } from '../pages/Contact/components/Form/FormContact';

// // Prueba de renderizado del componente
// test('renders FormContact component', () => {
//   render(
//     <Formik<FormContactValues>
//       initialValues={{ fullName: '', email: '', message: '' }}
//       validationSchema={validationSchema}
//       onsubmit={jest.fn()}
//     >
//       {() => (
//         <FormContact />
//       )}
//     </Formik>
//   );

//   // Verifica que se muestren los elementos del formulario
//   expect(screen.getByLabelText('Nombre y Apellido')).toBeInTheDocument();
//   expect(screen.getByLabelText('Correo Electrónico')).toBeInTheDocument();
//   expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
//   expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
// });

// // Prueba de validación del formulario
// test('validates form inputs', async () => {
//   render(
//     <Formik<FormContactValues>
//       initialValues={{ fullName: '', email: '', message: '' }}
//       validationSchema={validationSchema}
//       onSubmit={jest.fn()}
//     >
//       {() => (
//         <FormContact />
//       )}
//     </Formik>
//   );

//   // Simula un envío del formulario sin completar ningún campo
//   fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));

//   // Verifica que se muestren los mensajes de error
//   expect(await screen.findByText('El nombre es requerido')).toBeInTheDocument();
//   expect(await screen.findByText('El correo electrónico es requerido')).toBeInTheDocument();
//   expect(await screen.findByText('El mensaje es requerido')).toBeInTheDocument();
// });

// // Prueba de envío exitoso del formulario
// test('submits form successfully', async () => {
//   const onSubmit = jest.fn();

//   render(
//     <Formik<FormContactValues>
//       initialValues={{ fullName: '', email: '', message: '' }}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       {() => (
//         <FormContact />
//       )}
//     </Formik>
//   );

//   // Simula el llenado del formulario
//   fireEvent.change(screen.getByLabelText('Nombre y Apellido'), { target: { value: 'John Doe' } });
//   fireEvent.change(screen.getByLabelText('Correo Electrónico'), { target: { value: 'johndoe@example.com' } });
//   fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: 'Hola, este es un mensaje de prueba.' } });

//   // Simula el envío del formulario
//   fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));

//   // Verifica que se haya llamado a la función onSubmit con los valores correctos
//   expect(onSubmit).toHaveBeenCalledWith(
//     {
//       fullName: 'John Doe',
//       email: 'johndoe@example.com',
//       message: 'Hola, este es un mensaje de prueba.',
//     },
//     expect.objectContaining({
//       setSubmitting: expect.any(Function),
//       resetForm: expect.any(Function),
//     })
//   );

//   // Verifica que se muestre el mensaje de éxito
//   expect(await screen.findByText('El mensaje ha sido enviado correctamente.')).toBeInTheDocument();
// });

// // Prueba de envío fallido del formulario
// test('handles form submission error', async () => {
//   const onSubmit = jest.fn(() => {
//     throw new Error('Error al enviar el mensaje');
//   });

//   render(
//     <Formik<FormContactValues>
//       initialValues={{ fullName: '', email: '', message: '' }}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       {() => (
//         <FormContact />
//       )}
//     </Formik>
//   );

//   // Simula el llenado del formulario
//   fireEvent.change(screen.getByLabelText('Nombre y Apellido'), { target: { value: 'John Doe' } });
//   fireEvent.change(screen.getByLabelText('Correo Electrónico'), { target: { value: 'johndoe@example.com' } });
//   fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: 'Hola, este es un mensaje de prueba.' } });

//   // Simula el envío del formulario
//   fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));

//   // Verifica que se haya llamado a la función onSubmit con los valores correctos
//   expect(onSubmit).toHaveBeenCalledWith(
//     {
//       fullName: 'John Doe',
//       email: 'johndoe@example.com',
//       message: 'Hola, este es un mensaje de prueba.',
//     },
//     expect.objectContaining({
//       setSubmitting: expect.any(Function),
//       resetForm: expect.any(Function),
//     })
//   );

//   // Verifica que se muestre el mensaje de error
//   expect(await screen.findByText('Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente más tarde.')).toBeInTheDocument();
// });

// const validationSchema = Yup.object().shape({
//   fullName: Yup.string()
//     .required('El nombre es requerido')
//     .min(3, 'El nombre debe tener al menos 3 letras'),
//   email: Yup.string()
//     .email('El correo electrónico no es válido')
//     .required('El correo electrónico es requerido'),
//   message: Yup.string()
//     .required('El mensaje es requerido')
//     .min(10, 'El mensaje debe tener al menos 10 letras')
//     .max(80, 'El mensaje no puede exceder los 80 caracteres'),
// });
