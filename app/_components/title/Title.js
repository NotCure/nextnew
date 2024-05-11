import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Title = ({title}) => {
    return (
        <>
              <div className="flex justify-center items-center text-white pt-3">
        <h1 className="px-4 opacity-65">Home</h1>
        <FontAwesomeIcon icon={faAngleRight} color="#41A7FF" />
        <h1 className="px-4 opacity-65">{title}</h1>
      </div> 
      <div className="flex justify-center text-white items-center font-semibold pt-11">
            <h1 className="px-4 text-6xl">{title}</h1>

      </div>









        </>
    );
};

export default Title;

