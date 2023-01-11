import ToolIconCard from "@/components/v4/card/ToolIconCard";
import Link from "next/link";
import {CaretRight} from 'phosphor-react'
import ToolCard from "../card/ToolCard";

const ToolIconCardRow = ({ tools, topic }) => {
  return (
    <div className="w-full mb-12">
      <div className="flex justify-between">
        <h3 className="font-semibold text-lg mb-6 px-1">
          {topic} <span className="">tools</span>
        </h3>
          <Link href='/toolbox'>
            <div className="flex">
              <div className="text-sm my-auto text-black opacity-60">See all</div>
              <CaretRight className="opacity-60 my-auto" size={16} />
            </div>
          </Link>

      </div>
      {tools?.length?
      <>
      <ToolCard posts={tools} columns={'lg:grid-cols-2'} type="toolbox" />
      {/* <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 px-1`}> 
        {tools.map((tool, index) => {
           return (
             <div key={index}>
               <ToolIconCard small={true} withBackground={true} tool={tool?.attributes} />
             </div>
           );
         })}
       </div> */}
      </>
      :''}
    </div>
  );
};

export default ToolIconCardRow;