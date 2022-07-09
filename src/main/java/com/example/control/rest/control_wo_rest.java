package com.example.control.rest;

import com.example.model.work_orders;
import com.example.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class control_wo_rest
{
@Autowired
   repo_wo rew;

   @RequestMapping(path="/WoAll", method= RequestMethod.GET)
   public List<work_orders> getAllWo()
   {

       return (List)this.rew.findAll();
   }


   @PostMapping("/submit_sc")
   @Transactional
   @ResponseBody()
   public void creatcost_doc(work_orders wo)
   {
       this.rew.save(wo);


   }
   @PostMapping("/submit_wo")
   @ResponseBody()
   public void submit_wo( work_orders wo)
   {

       this.rew.save(wo);

   }

  
}
