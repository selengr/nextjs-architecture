// import { IUIAccordionProps } from '.';

// export function UIAccordion({ label, details,...props }: IUIAccordionProps) {
//   return (
//     <div className='relative'>
//       <div className="collapse bg-ms-white my-6 rounded-2xl border-2 border-ms-gray active:border-ms-border-green-33 " {...props}>
//       <input type="checkbox" className="peer absolute top-0" />
//         <div className="collapse-title text-ms-lg font-medium peer-checked:border-b-2 peer-checked:border-b-ms-light-green rounded-xl peer-checked:text-ms-light-green">
//           {label}
//         </div>
//         <div className="collapse-content">
//           <p className='px-2 pt-6 text-ms-sm'>{details}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
import { IUIAccordionProps } from '.';

export function UIAccordion({
  label,
  details,
  name,
  checked,
  error,
  handle_payWith
}: IUIAccordionProps) {
  return (
    <>
      <div
        className={`collapse bg-ms-white my-6 rounded-2xl border-2 
        ${
          checked
            ? 'border-ms-border-green-33'
            : error
            ? 'border-ms-crimson'
            : 'border-ms-gray'
        }`}
      >
        <input
          type="radio"
          name={name}
          checked={checked}
          onClick={handle_payWith}
        />
        <div
          className={`collapse-title text-ms-lg font-medium rounded-xl px-4 ${
            checked
              ? 'border-b-2 border-b-ms-light-green text-ms-light-green'
              : ''
          }${error ? 'text-ms-crimson' : ''}
          `}
        >
          {label}
        </div>
        <div className="collapse-content">
          <p className="px-2 pt-6 text-ms-sm">{details}</p>
        </div>
      </div>
    </>
  );
}
