import { Input, Form, message, Spin, InputNumber, Select, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
function UpdateProductPage() {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/products/${productId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProductData(data);
          console.log(productData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [productId]);
  console.log(productData);
  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" autoComplete="off">
        <Form.Item
          label="Ürün İsmi"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen ürün adını girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ürün Fiyatı"
          name="current"
          rules={[
            {
              required: true,
              message: "Lütfen ürün fiyatı girin!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="İndirim Oranı"
          name="discount"
          rules={[
            {
              required: true,
              message: "Lütfen indirim oranını girin!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Ürün Kategorisi"
          name="category"
          rules={[
            {
              required: true,
              message: "Lütfen ürün kategorisi girin!",
            },
          ]}
        >
          <Select>
            {categories.map((item) => (
              <Select.Option value={item._id} key={item._id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Ürün Görselleri (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen 4 adet ürün görsel linkini girin!",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Ürün görselleri sırayla giriniz."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item
          label="Ürün Renkleri (RGB)"
          name="colors"
          rules={[
            {
              required: true,
              message: "Lütfen geçerli ürün renklerini yazınız",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Lütfen geçerli ürün renklerini yazınız (RGB)"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item
          label="Ürün Bedenlerini Giriniz"
          name="sizes"
          rules={[
            {
              required: true,
              message: "Lütfen geçerli ürün bedenlerini yazınız",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Lütfen geçerli ürün bedenlerini yazınız"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item
          label="Ürün Detayı Giriniz"
          name="description"
          rules={[
            {
              required: true,
              message: "Ürün Detayı Giriniz",
            },
          ]}
        >
          <ReactQuill theme="snow" style={{ backgroundColor: "white" }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Kategori Oluştur
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
}

export default UpdateProductPage;