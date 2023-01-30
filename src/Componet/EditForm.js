import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button } from "antd";

const EditForm = () => {
  const [form] = Form.useForm();

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchdata = async () => {
    try {
      const data = await axios.get(
        `http://localhost:4000/api/show-single/${id}`
      );

      form.setFieldsValue({
        title: data.data.title,
        author: data.data.author,
        body: data.data.body,
      });
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  const onFinish = async (values) => {
    try {
      await axios.post(`http://localhost:4000/api/update/${id}`, {
        title: values.title,
        author: values.author,
        body: values.body,
      });
    } catch (er) {
      console.log(er);
    }
    navigate("/");
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
            message: "Please enter a title!",
          },
        ]}
      >
        <Input placeholder="Enter title" />
      </Form.Item>
      <Form.Item
        name="author"
        label="Author"
        rules={[
          {
            required: true,
            message: "Please enter an author!",
          },
        ]}
      >
        <Input placeholder="Enter author" />
      </Form.Item>
      <Form.Item
        name="body"
        label="Body"
        rules={[
          {
            required: true,
            message: "Please enter a body!",
          },
        ]}
      >
        <Input placeholder="Enter body" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditForm;
