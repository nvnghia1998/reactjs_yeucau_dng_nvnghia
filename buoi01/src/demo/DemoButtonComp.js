import Button from "../shared/Button";

function DemoButtonComp() {
  return (
    <>
      <Button>Nội dung ở giữa</Button>
      <Button className="custom">Nội dung ở giữa</Button>
      <Button onClick={() => console.log('clickd me!')}>Nội dung ở giữa</Button>
      <Button type="default">Nội dung ở giữa</Button>
      <Button type="category">Nội dung ở giữa</Button>
      <Button type="primary">Nội dung ở giữa</Button>
      <Button type="primary" size="large">Nội dung ở giữa</Button>
      <Button type="primary" htmlType="submit">Nội dung ở giữa</Button>
      <Button type="primary" htmlType="submit" loading={true}>Nội dung ở giữa</Button>
    </>
  );
}

export default DemoButtonComp;