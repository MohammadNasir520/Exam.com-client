import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <Button type="primary" className="bg-blue-700">
        Button
      </Button>
      <Button type="primary" danger>
        Primary
      </Button>
      <Button danger>Default</Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="text" danger>
        Text
      </Button>
      <Button type="link" danger>
        Link
      </Button>
    </div>
  );
}
