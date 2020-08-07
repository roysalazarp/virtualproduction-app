resource "aws_eip" "scenes-service-eip" {
  instance = module.scenes-service.instance-id
}

module "scenes-service" {
  source = "./node-server"

  ami-id               = "ami-039609244d2810a6b"
  iam-instance-profile = module.scenes-service-codedeploy.iam-instance-profile
  key-pair             = aws_key_pair.microservice-webapp-key.key_name
  name                 = "scenes-service"
  private-ip           = "10.0.1.5"
  subnet-id            = aws_subnet.microservices-webapp-subnet-private-1.id
  vpc-security-group-ids = [
    aws_security_group.allow-internal-http.id,
    aws_security_group.allow-ssh.id,
    aws_security_group.allow-all-outbound.id
  ]
}

module "scenes-service-codedeploy" {
  source = "./codedeploy-app"

  app-name          = "scenes-service"
  ec2-instance-name = module.scenes-service.name
}