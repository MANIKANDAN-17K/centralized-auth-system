FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copy pom.xml and source
COPY pom.xml .
COPY src ./src

# Build the jar
RUN apt-get update && apt-get install -y maven && \
    mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/AuthService-0.0.1-SNAPSHOT.jar"]