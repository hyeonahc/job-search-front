import './Filter.scss';
import React, { useState, useContext } from 'react';
import logo from '../img/logo.png';
import produce from 'immer';
import JobPostContext from '../context/job-post-context';

const foundingDates = [
  {
    id: 'foundingDate-irrelevant',
    value: -1,
    name: 'foundingDate',
    label: '무관',
  },
  {
    id: 'foundingDate-less-than-5years',
    value: 'between',
    name: 'foundingDate',
    label: '5년 미만',
  },
  {
    id: 'foundingDate-more-than-5years',
    value: 5,
    name: 'foundingDate',
    label: '5년 이상',
  },
  {
    id: 'foundingDate-more-than-10years',
    value: 10,
    name: 'foundingDate',
    label: '10년 이상',
  },
  {
    id: 'foundingDate-more-than-20years',
    value: 20,
    name: 'foundingDate',
    label: '20년 이상',
  },
];

const revenues = [
  {
    id: 'revenue-irrelevant',
    value: -1,
    name: 'revenue',
    label: '무관',
  },
  {
    id: 'revenue-less-than-10billion',
    value: 'between',
    name: 'revenue',
    label: '10억 미만',
  },
  {
    id: 'revenue-more-than-10billion',
    value: 10,
    name: 'revenue',
    label: '10억 이상',
  },
  {
    id: 'revenue-more-than-50billion',
    value: 50,
    name: 'revenue',
    label: '50억 이상',
  },
  {
    id: 'revenue-more-than-100billion',
    value: 100,
    name: 'revenue',
    label: '100억 이상',
  },
  {
    id: 'revenue-more-than-500billion',
    value: 500,
    name: 'revenue',
    label: '500억 이상',
  },
];

const employees = [
  {
    id: 'employee-irrelevant',
    value: -1,
    name: 'employee',
    label: '무관',
  },
  {
    id: 'employee-less-than-10',
    value: 'between',
    name: 'employee',
    label: '10인 미만',
  },
  {
    id: 'employee-between-10-to-49',
    value: 49,
    name: 'employee',
    label: '10 - 49인',
  },
  {
    id: 'employee-between-50-to-499',
    value: 499,
    name: 'employee',
    label: '50 - 499인',
  },
  {
    id: 'employee-more-than-500',
    value: 500,
    name: 'employee',
    label: '500인 이상',
  },
];

const Filter = () => {
  const { actions } = useContext(JobPostContext);

  const [form, setForm] = useState({
    foundingDate: '',
    revenue: '',
    employee: '',
  });

  const onChange = event => {
    setForm(
      produce(form, draft => {
        draft[event.target.name] = event.target.value;
      })
    );
  };

  const onClick = () => {
    actions.onSearch(form);
  };

  return (
    <div className="filter">
      <h1>
        <img src={logo} alt="" width="200" />
      </h1>
      <div class="option">
        <h2>업력</h2>
        <ul onChange={onChange}>
          {foundingDates.map(foundingDate => (
            <li key={foundingDate.id}>
              <input
                type="radio"
                id={foundingDate.id}
                value={foundingDate.value}
                name={foundingDate.name}
              />
              <label htmlFor={foundingDate.id}>{foundingDate.label}</label>
            </li>
          ))}
        </ul>
      </div>

      <div class="option">
        <h2>매출액</h2>
        <ul onChange={onChange}>
          {revenues.map(revenue => (
            <li key={revenue.id}>
              <input
                type="radio"
                id={revenue.id}
                value={revenue.value}
                name={revenue.name}
              />
              <label htmlFor={revenue.id}>{revenue.label}</label>
            </li>
          ))}
        </ul>
      </div>

      <div class="option">
        <h2>회사사원수</h2>
        <ul onChange={onChange}>
          {employees.map(employee => (
            <li key={employee.id}>
              <input
                type="radio"
                id={employee.id}
                value={employee.value}
                name={employee.name}
              />
              <label htmlFor={employee.id}>{employee.label}</label>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={onClick}>필터 적용하기</button>
    </div>
  );
};

export default Filter;
