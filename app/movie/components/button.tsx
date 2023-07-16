interface MovieBtnProps {
  label: string;
  onClick?: () => void;
}

const MovieBtn = ({ label, onClick }: MovieBtnProps) => {
  return (
    <div className='flex w-full  bg-indigo-400 text-gray-50 hover:bg-gray-50 hover:text-gray-800 rounded-md p-2 font-semibold transform ease-linear duration-100'>
      <button className='w-full' onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default MovieBtn;
