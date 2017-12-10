/*
 * This file is generated by jOOQ.
*/
package de.vorb.npmstat.persistence.jooq.tables.pojos;


import java.io.Serializable;
import java.time.LocalDate;

import javax.annotation.Generated;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


/**
 * This class is generated by jOOQ.
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.9.6"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class DownloadCount implements Serializable {

    private static final long serialVersionUID = 495295244;

    private String    packageName;
    private LocalDate date;
    private Integer   count;

    public DownloadCount() {}

    public DownloadCount(DownloadCount value) {
        this.packageName = value.packageName;
        this.date = value.date;
        this.count = value.count;
    }

    public DownloadCount(
        String    packageName,
        LocalDate date,
        Integer   count
    ) {
        this.packageName = packageName;
        this.date = date;
        this.count = count;
    }

    @NotNull
    @Size(max = 255)
    public String getPackageName() {
        return this.packageName;
    }

    public DownloadCount setPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }

    @NotNull
    public LocalDate getDate() {
        return this.date;
    }

    public DownloadCount setDate(LocalDate date) {
        this.date = date;
        return this;
    }

    @NotNull
    public Integer getCount() {
        return this.count;
    }

    public DownloadCount setCount(Integer count) {
        this.count = count;
        return this;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        final DownloadCount other = (DownloadCount) obj;
        if (packageName == null) {
            if (other.packageName != null)
                return false;
        }
        else if (!packageName.equals(other.packageName))
            return false;
        if (date == null) {
            if (other.date != null)
                return false;
        }
        else if (!date.equals(other.date))
            return false;
        if (count == null) {
            if (other.count != null)
                return false;
        }
        else if (!count.equals(other.count))
            return false;
        return true;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((this.packageName == null) ? 0 : this.packageName.hashCode());
        result = prime * result + ((this.date == null) ? 0 : this.date.hashCode());
        result = prime * result + ((this.count == null) ? 0 : this.count.hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("DownloadCount (");

        sb.append(packageName);
        sb.append(", ").append(date);
        sb.append(", ").append(count);

        sb.append(")");
        return sb.toString();
    }
}