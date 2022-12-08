import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

import { Container } from './styles';

type Inputs = {
  name: string;
  email: string;
  mensagem: string;
};

export const Form = () => {
  const seccess = () => toast.success(`Formulario enviado com sucesso`);
  const [send, setSend] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    setSend(true);
    setTimeout(() => {
      fetch(`/api/mail`, {
        method: `POST`,
        headers: {
          Accept: `application/json, text/plain, */*`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.status === 200) {
          }
        })
        .finally(() => {
          reset();
          seccess();
          setSend(false);
        });
    }, 3000);
  };
  return (
    <>
      <Container>
        <Toaster
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 3000,
            position: `bottom-right`,
          }}
        />
        <div className="content">
          <h2>Envie suas dúvidas, críticas ou sugestões</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input">
              <label>Nome</label>
              <input
                className={errors.name ? `error` : ``}
                {...register(`name`, { required: true })}
              />
            </div>

            <div className="input">
              <label>E-mail</label>
              <input
                className={errors.email ? `error` : ``}
                {...register(`email`, { required: true })}
              />
            </div>

            <div className="input">
              <label>Mensagem</label>
              <textarea
                id="mensagem"
                className={errors.mensagem ? `error` : ``}
                {...register(`mensagem`, { required: true })}
              />
            </div>

            <div className="button">
              {send && <span>Enviando...</span>}
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
