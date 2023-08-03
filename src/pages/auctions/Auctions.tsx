import { useForm } from 'react-hook-form';
import {
  Button,
  Card,
  CarListItem,
  CounterBid,
  Input,
  Layout,
} from '../../components';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

// const auctionsQuery = (id: any) => ({
//   queryKey: ['auctions', 'all'],
//   queryFn: async () =>
//     fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
//       response.json()
//     ),
// });
const auctionsQuery = () => ({
  queryKey: ['auctions', 'all'],
  queryFn: async () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
      response.json()
    ),
});

export const loader = (queryClient: any) => async () => {
  const query = auctionsQuery();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

const Auctions = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = (data: any) => console.log(data);

  const { isLoading, error, data } = useQuery('auctions', () =>
    axios.get('https://jsonplaceholder.typicode.com/todos').then((data) => {
      console.log(data);
      return data?.data;
    })
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>'An error has occurred: ' + (error as any).message</p>;
  // console.log(data);

  // const data = useLoaderData();

  return (
    <Layout>
      <div className="p-10 grid grid-cols-3 justify-items-center">
        {data.map((r: any) => (
          // <p key={r.id}>
          //   {i + 1}: {r.title}
          // </p>
          <CarListItem key={r.id} />
        ))}
      </div>
      {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
      {/*  <div className="w-1/4">*/}
      {/*    <Card>*/}
      {/*      <Input*/}
      {/*        inputType="text"*/}
      {/*        register={register}*/}
      {/*        controlName="controlTest"*/}
      {/*      />*/}
      {/*    </Card>*/}
      {/*  </div>*/}
      {/*  <div className="w-1/4">*/}
      {/*    <Card>*/}
      {/*      <Input*/}
      {/*        inputType="text"*/}
      {/*        register={register}*/}
      {/*        controlName="controlTest"*/}
      {/*        label="Label Test"*/}
      {/*      />*/}
      {/*    </Card>*/}
      {/*  </div>*/}
      {/*  <Button text="Send" type="submit" />*/}
      {/*</form>*/}
      {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
      {/*  /!* register your input into the hook by invoking the "register" function *!/*/}
      {/*  <input*/}
      {/*    className="bg-amber-400 text-white p-3"*/}
      {/*    defaultValue="test"*/}
      {/*    {...register('example')}*/}
      {/*  />*/}

      {/*  /!* include validation with required or other standard HTML validation rules *!/*/}
      {/*  /!*<input {...register('exampleRequired', { required: true })} />*!/*/}
      {/*  /!* errors will return when field validation fails  *!/*/}
      {/*  /!*{errors.exampleRequired && <span>This field is required</span>}*!/*/}
      {/*</form>*/}
    </Layout>
  );
};

export default Auctions;
