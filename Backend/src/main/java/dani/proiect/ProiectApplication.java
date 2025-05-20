package dani.proiect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProiectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProiectApplication.class, args);

		int i = 5;
		System.out.println(i); // This should be inside the method, not in the class body
	}
}
