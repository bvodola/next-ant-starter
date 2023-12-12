import { Button, ConfigProvider } from "antd";
import theme from "src/theme/themeConfig";

export default function HomePage() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Button type="primary">Ant Design Button</Button>
      </div>
    </ConfigProvider>
  );
}
