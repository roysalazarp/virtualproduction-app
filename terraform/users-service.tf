resource "aws_eip" "users-service-eip" {
  instance = module.users-service.instance-id
}

module "users-service" {
  source = "./node-server"

  ami-id               = "ami-039609244d2810a6b"
  iam-instance-profile = module.users-service-codedeploy.iam-instance-profile
  key-pair             = aws_key_pair.microservice-webapp-key.key_name
  name                 = "users-service"
  private-ip           = "10.0.1.6"
  subnet-id            = aws_subnet.microservices-webapp-subnet-private-1.id
  vpc-security-group-ids = [
    aws_security_group.allow-internal-http.id,
    aws_security_group.allow-ssh.id,
    aws_security_group.allow-all-outbound.id
  ]
}

module "users-service-codedeploy" {
  source = "./codedeploy-app"

  app-name          = "users-service"
  ec2-instance-name = module.users-service.name
}