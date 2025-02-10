import React from "react";
import { Input, Card, Row, Col, Typography, Layout, Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const { Title } = Typography;
const { Header, Content } = Layout;

const articles = [
  {
    id: 1,
    title: "Changelog for 2024",
    description: "Explore the latest updates and enhancements.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    author: "Manu Arora",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    description: "A guide to understanding and using React Hooks.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    author: "Emily Carter",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    title: "CSS Grid Layout",
    description: "Learn how to create complex layouts with CSS Grid.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    author: "John Doe",
    authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item onClick={() => navigate("/profile")}>Edit Profile</Menu.Item>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header style={{ backgroundColor: "#001529", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}>My Blog</div>
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar
            src="https://randomuser.me/api/portraits/men/32.jpg"
            icon={<UserOutlined />}
            style={{ cursor: "pointer" }}
          />
        </Dropdown>
      </Header>
      <Content style={{ padding: "20px" }}>
        <Search
          placeholder="Search"
          style={{ marginBottom: "20px", maxWidth: "400px" }}
          enterButton
        />
        <Title level={2}>Blog</Title>
        <p>Discover insightful resources and expert advice from our team.</p>
        <Row gutter={[16, 16]}>
          {articles.map((article) => (
            <Col key={article.id} xs={24} sm={12} md={8}>
              <Card
                hoverable
                cover={
                  <img
                    alt={article.title}
                    src={article.image}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <Avatar src={article.authorImage} icon={<UserOutlined />} />
                  <div style={{ marginLeft: "10px", fontWeight: "bold" }}>{article.author}</div>
                </div>
                <Card.Meta title={article.title} description={article.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default HomePage;
