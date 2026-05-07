FROM openjdk:17-jdk-slim

WORKDIR /app

# Install Maven
RUN apt-get update && apt-get install -y maven

# Copy pom.xml and source FIRST
COPY pom.xml .
COPY src ./src

# Now build
RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/AuthService-0.0.1-SNAPSHOT.jar"]