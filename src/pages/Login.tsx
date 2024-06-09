import { Heading } from "@componants/common";
import { Input } from "@componants/from";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginType } from "@validations/loginSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, Row, Col } from "react-bootstrap";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const submitForm: SubmitHandler<loginType> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Heading title="User Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="Email address"
              name="email"
              register={register}
              error={errors.email?.message}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
            />

            <Button variant="info" type="submit" style={{ color: "white" }}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
