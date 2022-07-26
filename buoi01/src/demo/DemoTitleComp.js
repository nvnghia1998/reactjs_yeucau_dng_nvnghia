import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";
import cls from 'classnames'

function DemoTitleComp(children, isButton) {

  <>
    <MainTitle>Title 1</MainTitle>
    <MainTitle btnLabel="view more" btnProps={{
      type: 'category',
      as: 'a'
    }}>Title 2</MainTitle>
    <MainTitle btnLabel="view more" btnProps={{
      type: 'primary',
      as: 'button'
    }}>Title 3</MainTitle>
  </>

}

export default DemoTitleComp;