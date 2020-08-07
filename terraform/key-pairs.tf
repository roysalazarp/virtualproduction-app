resource "aws_key_pair" "microservice-webapp-key" {
  key_name   = "microservice-webapp-key"
  public_key = file("./microservice_webapp.pem")
}
