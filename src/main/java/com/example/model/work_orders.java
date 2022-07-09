package com.example.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "work_orders")
public class work_orders
{
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "id_wo", unique = true, nullable = false)
    String id_wo;
    @Column(name = "kode_wo", unique = true, nullable = false)
  String kode_wo;
  String asset_name;
    String jenis_pekerjaan;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name="pembuatan", nullable=true)
    @Temporal(TemporalType.DATE)
    private Date pembuatan;
    String lokasi;
    String status_pekerjaan;
    String uraian;


}
