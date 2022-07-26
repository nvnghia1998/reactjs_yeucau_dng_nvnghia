import cls from 'classnames'
import { useState } from 'react';
function Input({labelName, type, typeHtml, placeholder, icon, ...restParams}) {
  let classes = cls('',{
    'header-search': type === 'search',
    'form-control': type === 'default'
  });
  const [typeInput, setTypeHtml] = useState(typeHtml);
  const [classIcon, setClassIcon] = useState(icon);
  
  function handleWhatchPass() {
    let type = typeInput === 'text' ? 'password' : 'text';
    let classInput = cls('toggle-password', {
      'ion-eye-disabled':type === 'text',
      'ion-eye': type === 'password'
    });
    setTypeHtml(type);
    setClassIcon(classInput);
  }
  return (
    <>
      <div className={classes}>
        {labelName && <label htmlFor>{labelName}</label>}
        {icon && <i onClick={handleWhatchPass} class={classIcon}></i>}
        <input type={typeInput} placeholder={placeholder} {...restParams} />
      </div>
    </>
  );
}

export default Input;