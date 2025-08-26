import { useRouteError} from 'react-router';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <h1 className='font-bold text-6xl/18'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className='italic text-gray-400'>
                {error.statusText || error.message}
            </p>
        </div>
    )
}