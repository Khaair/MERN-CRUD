import { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

function Formm(props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      let x = await axios.post("http://localhost:4000/api/save", values);
      console.log(x, "success");
    } catch (er) {
      console.log(er);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div class="form-area mt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <Form
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input the title!" }]}
              >
                <Input placeholder="Enter title" />
              </Form.Item>
              <Form.Item
                label="Author"
                name="author"
                rules={[
                  { required: true, message: "Please input the author!" },
                ]}
              >
                <Input placeholder="Enter author" />
              </Form.Item>
              <Form.Item
                label="Body"
                name="body"
                rules={[{ required: true, message: "Please input the body!" }]}
              >
                <Input placeholder="Enter body" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" loading={loading} htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formm;
