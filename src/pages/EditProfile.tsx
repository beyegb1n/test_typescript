import React from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Avatar,
  Typography,
  Layout,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

const EditProfile: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textTransform: "uppercase",
      }}
    >
      <Content style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <Title
          level={2}
          style={{
            marginBottom: "20px",
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Edit Profile
        </Title>
        <Row justify="center" style={{ marginBottom: "20px" }}>
          <Avatar
            size={100}
            src="https://randomuser.me/api/portraits/men/32.jpg"
          />
        </Row>
        <Form
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            firstName: "Emmanuel",
            lastName: "Kouassi",
            email: "emmanuel20kouassi10@gmail.com",
            address: "46 Rue Simone Veil",
            city: "Vénissieux",
            state: "Lyon",
            contactNumber: "0751332564",
            password: "",
          }}
          style={{
            backgroundColor: "#111",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #fff",
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label={<span style={{ color: "#fff" }}>First Name</span>}
                name="firstName"
              >
                <Input
                  style={{
                    backgroundColor: "#222",
                    color: "#fff",
                    border: "1px solid #fff",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<span style={{ color: "#fff" }}>Last Name</span>}
                name="lastName"
              >
                <Input
                  style={{
                    backgroundColor: "#222",
                    color: "#fff",
                    border: "1px solid #fff",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label={<span style={{ color: "#fff" }}>Email</span>}
            name="email"
          >
            <Input
              style={{
                backgroundColor: "#222",
                color: "#fff",
                border: "1px solid #fff",
              }}
            />
          </Form.Item>
          <Form.Item
            label={<span style={{ color: "#fff" }}>Address</span>}
            name="address"
          >
            <Input
              style={{
                backgroundColor: "#222",
                color: "#fff",
                border: "1px solid #fff",
              }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={handleCancel}
                style={{
                  backgroundColor: "#444",
                  color: "#fff",
                  border: "1px solid #fff",
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "1px solid #000",
                }}
              >
                Save
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default EditProfile;
