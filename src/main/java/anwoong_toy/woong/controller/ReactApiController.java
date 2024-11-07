package anwoong_toy.woong.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactApiController {

	@GetMapping("/react/api")
	public String reactApi() {
		return "react API 22 ~~";
	}
}
