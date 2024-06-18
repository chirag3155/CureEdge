import { SparklesIcon } from '@heroicons/react/20/solid';


const ListItem = ({ text }) => {
  return (
    <li className="flex lg:items-center gap-3 text-xs xs:text-lg md:text-xl lg:text-xl">
  <SparklesIcon className="h-8 w-3 text-[#2c84f7]" />
  <p>{text}</p>
</li>
  );
};

export default ListItem;
