package main.app.presentation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MappingController {

    @RequestMapping(value = {
        "/{path:[^\\.]*}",
        "/{path:^(?!api$).*$}/**/{subpath:[^\\.]*}"
    })
    public String forward() {
        return "forward:/index.html";
    }
}