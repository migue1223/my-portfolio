import React, { useState } from 'react';
import MyHobbies from './Hobbies';
import { myExperienceData } from './experience.data';
import Pagination from '../Pagination';

import './styles.css';

const Hobbies = () => {
  const myExperience = [...myExperienceData];
  const [currentPage, setCurrentPage] = useState(1);

  const currentCategory = 'all';
  const handleChangePage = (page) => setCurrentPage(page);

  // debugger;
  const pageSize = 2;
  const pageCount = Math.ceil(myExperience.length / pageSize);
  const from = pageSize * (currentPage - 1);
  const to = pageSize * currentPage;
  // const data = myExperience.slice(from, Math.min(to, myExperience.length));
  const data = myExperience;

  return (
    <div id='hobbies-card'>
      <h1>Hobbies/Certificates</h1>
      {data?.length > 0 &&
        data.map((item) => (
          <MyHobbies
            /* onClick={() => handleChangePage(1)}*/ key={item.id}
            {...item}
          />
        ))}
      {/* <Pagination
        key={currentCategory}
        totalPage={pageCount}
        pageSize={pageSize}
        pageBound={pageSize}
        setPage={handleChangePage}
        pageNow={currentPage}
      /> */}
    </div>
  );
};

export default Hobbies;
