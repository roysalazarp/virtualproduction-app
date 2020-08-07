resource "aws_internet_gateway" "microservices-webapp" {
  vpc_id = aws_vpc.microservices-webapp.id
}

resource "aws_route_table" "allow-outgoing-access" {
  vpc_id = aws_vpc.microservices-webapp.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.microservices-webapp.id
  }

  tags = {
    Name = "Route Table Allowing Outgoing Access"
  }
}

resource "aws_route_table_association" "microservices-webapp-subnet-public" {
  subnet_id      = aws_subnet.microservices-webapp-subnet-public.id
  route_table_id = aws_route_table.allow-outgoing-access.id
}

resource "aws_route_table_association" "microservices-webapp-subnet-private-1" {
  subnet_id      = aws_subnet.microservices-webapp-subnet-private-1.id
  route_table_id = aws_route_table.allow-outgoing-access.id
}

resource "aws_security_group" "allow-internal-http" {
  name        = "allow-internal-http"
  description = "Allow internal HTTP requests"
  vpc_id      = aws_vpc.microservices-webapp.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.microservices-webapp.cidr_block]
  }
}

resource "aws_security_group" "allow-http" {
  name        = "allow-http"
  description = "Allow HTTP inbound traffic"
  vpc_id      = aws_vpc.microservices-webapp.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "allow-ssh" {
  name        = "allow-ssh"
  description = "Allow SSH inbound traffic"
  vpc_id      = aws_vpc.microservices-webapp.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "allow-all-outbound" {
  name        = "allow-all-outbound"
  description = "Allow all outbound traffic"
  vpc_id      = aws_vpc.microservices-webapp.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_subnet" "microservices-webapp-subnet-public" {
  availability_zone_id = "eun1-az1"
  cidr_block           = "10.0.0.0/24"
  vpc_id               = aws_vpc.microservices-webapp.id

  tags = {
    Name = "Microservices Webapp Subnet (Public)"
  }
}

resource "aws_subnet" "microservices-webapp-subnet-private-1" {
  availability_zone_id = "eun1-az1"
  cidr_block           = "10.0.1.0/24"
  vpc_id               = aws_vpc.microservices-webapp.id

  tags = {
    Name = "Microservices Webapp Subnet (Private 1)"
  }
}

resource "aws_subnet" "microservices-webapp-subnet-private-2" {
  availability_zone_id = "eun1-az2"
  cidr_block           = "10.0.2.0/24"
  vpc_id               = aws_vpc.microservices-webapp.id

  tags = {
    Name = "Microservices Webapp Subnet (Private 2)"
  }
}

resource "aws_vpc" "microservices-webapp" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name = "Microservices Webapp VPC"
  }
}
